class AdminController {
  // [GET] /courses?pageIndex=&pageSize=
  index(req, res, next) {}
  //[POST] /courses/store
  createCourse(req, res, next) {}
  //[DELETE] /courses/:id
  deleteCourse(req, res, next) {}
  //[DELETE] /courses/force-delete/:id
  forceDeleteCourse(req, res, next) {}
}
module.exports = new AdminController();
