const uploadMulter = require("./uploadMulter.js");
const XLSX = require("xlsx");
const bcrypt = require("bcrypt");
const Candidate = require("../../models/Candidates");
const CandidateGroup = require("../../models/CandidatesGroup");

const createCandidatesFromFileUpload = async (req, res) => {
  uploadMulter(req, res, async (err) => {
    if (err) {
      console.log("askdnakjsdnakjnk");
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

        let cnd_grp = await CandidateGroup.findOne({ title: req.body.title });
        if (cnd_grp) return res.status(500).send("Title is already used");

        let candidate_grp = await CandidateGroup({ title: req.body.title });
        candidate_grp.save();

        for (let xld of xlData) {
          let cnd = await Candidate.find({ username: xld.Username });
          if (cnd.length > 0) {
            console.log("asdlkansdkln");
            candidate_grp.remove();
            return res.status(500).send("The candidate is already in use");
          }
          const salt = await bcrypt.genSalt(10);
          const hashedPassword = await bcrypt.hash(String(xld.Password), salt);
          const hashedAadharNumber = await bcrypt.hash(
            String(xld["Adhar No."]),
            salt
          );

          let candidate = {
            firstname: xld.FirstName,
            lastname: xld.LastName,
            fathername: xld["Fathers Name"],
            aadharnumber: hashedAadharNumber,
            email: xld.Email,
            username: xld.Username,
            password: hashedPassword,
            mobile: xld.Mobile,
            telephone: xld.Telephone,
            street: xld.Street,
            city: xld.City,
            state: xld.State,
            country: xld.Country,
            zip: xld.Zip,
            candidate_group: candidate_grp._id,
          };
          let candidate_obj = await Candidate(candidate);
          candidate_obj.save();
          candidate_grp.candidates.push(candidate_obj._id);
        }

        candidate_grp.save();

        res.status(200).send(candidate_grp);
      } catch (err) {
        console.log(err);
        res.status(500);
      }
    }
  });
};

module.exports = createCandidatesFromFileUpload;
