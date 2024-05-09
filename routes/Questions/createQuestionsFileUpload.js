const uploadMulter = require("./uploadMulter");
const XLSX = require("xlsx");
const Questions = require("../../models/Questions");
const Options = require("../../models/Options");
const QuestionsGroup = require("../../models/QuestionsGroup");

const createQuestionsFromFileUpload = async (req, res) => {
  uploadMulter(req, res, async (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      try {
        const workbook = XLSX.readFile(
          `${req.file.destination}${req.file.filename}`
        );
        const sheet_name_list = workbook.SheetNames;

        const xlData = XLSX.utils.sheet_to_json(
          workbook.Sheets[sheet_name_list[0]]
        );
        let question_group = await QuestionsGroup({
          title: req.body.title,
        }).populate({
          path: "questions",
          model: "question_schema",
          populate: {
            path: "options",
            model: "options_schema",
          },
        });

        question_group.save();

        for (let xld of xlData) {
          let question_type = xld.QuestionType;
          let question_title = xld.Question;
          let correct_answer = String(xld.correctanswer).replace(/\s/g, "");
          let correct_answer_arr = correct_answer.split(",");
          let number_of_options = parseInt(xld.Noofanswers);
          let positive_marks = xld.Marks;
          let negative_marks = 0;

          let question = {
            title: question_title,
            is_objective: number_of_options > 0,
            positive_marks: positive_marks,
            type_question: question_type,
            negative_marks: negative_marks,
          };

          let question_obj = await Questions(question).populate({
            path: "options",
            model: "options_schema",
          });
          question_obj.save();

          for (let i = 0; i < number_of_options; i++) {
            let is_correct = correct_answer_arr.indexOf(String(i + 1)) !== -1;
            let option_list = {
              title: xld[`Answer${i + 1}`],
              is_correct: is_correct,
              question_id: question_obj._id,
            };

            let option_obj = await Options(option_list);
            option_obj.save();
            question_obj.options.push(option_obj._id);
          }

          question_group.questions.push(question_obj._id);
        }
        res.json(question_group);
      } catch (err) {
        res.status(500).json("Error...");
      }
    }
  });
};

module.exports = createQuestionsFromFileUpload;
