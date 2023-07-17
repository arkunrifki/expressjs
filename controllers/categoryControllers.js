exports.getAllCategories = (req, res) => {
//   console.log(req.requestTime);
  res.status(200).json({
    status: "Succes",
    data: [
      {
        id: "01",
        name: "Laptop",
      },
      {
        id: "02",
        name: "Monitor",
      },
      {
        id: "03",
        name: "Headset",
      },
    ],
  });
};

exports.storeCategory = (req, res) => {
  let name = req.body.name;
  let desc = req.body.desc;

  if (!name && !desc) {
    return res.status(400).json({
      status: "fail",
      error: "Validation is fail",
    });
  }

  return res.status(200).json({
    status: "Success",
    message: "Validation is succed",
  });

  //pasang storeCategory
};
