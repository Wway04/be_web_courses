const coursesModel = require("../model/coursesModel");

class CoursesController {
  // [GET] /courses?pageIndex=&pageSize=
  index(req, res, next) {
    const pageIndex = req.query.pageIndex - 1;
    const pageSize = req.query.pageSize;
    coursesModel.getPagination(pageIndex, pageSize, (result) => {
      res.json(result);
    });
  }

  //[POST] /courses/store
  store(req, res, next) {
    coursesModel.create(req.body, (result) => {
      res.json(result);
    });
  }

  //[PATCH] /courses/:id
  update(req, res, next) {
    coursesModel.update(req.params.id, req.body, (result) => {
      res.json(result);
    });
  }

  //[DELETE] /courses/:id
  delete(req, res, next) {
    coursesModel.delete(req.params.id, (result) => {
      res.json(result);
    });
  }

  //[DELETE] /courses/force-delete/:id
  forceDelete(req, res, next) {
    coursesModel.forceDelete(req.params.id, (result) => {
      res.json(result);
    });
  }
}
module.exports = new CoursesController();
