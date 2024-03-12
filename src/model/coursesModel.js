const db = require("../common/connect");
const slugify = require("slugify");

const CourseModel = function () {};

CourseModel.getPagination = function (pageIndex, pageSize, result) {
  const pageOffset = pageIndex * pageSize;
  db.query(
    `SELECT * FROM courses WHERE deleted_at IS NULL
     LIMIT ${pageSize} 
     OFFSET ${pageOffset}`,
    function (err, data) {
      if (err) throw err;
      result(data);
    }
  );
};
CourseModel.create = function (data, callback) {
  const sql = `INSERT INTO courses (name, description, image, slug, level, deleted_at) VALUES ('${
    data.course_name
  }', '${data.course_description}', 'https://img.youtube.com/vi/${
    data.course_videoId
  }/sddefault.jpg','${slugify(data.course_name)}', '${
    data.course_level
  }', NULL)`;
  db.query(sql, function (err, dataDb) {
    if (err) throw err;
    callback(data);
  });
};
CourseModel.update = function (id, newData, callback) {
  var sql = `UPDATE courses SET name = '${newData.course_name}', description ='${newData.course_description}', level = '${newData.course_level}' WHERE id = ${id}`;
  db.query(sql, function (err, dataDb) {
    if (err) throw err;
    callback(newData);
  });
};
CourseModel.delete = function (id, callback) {
  const currentDate = new Date();
  var sql = `UPDATE courses SET deleted_at = '${currentDate}' WHERE id = ${id}`;
  db.query(sql, function (err, dataDb) {
    if (err) throw err;
    callback("Successfully deleted");
  });
};

CourseModel.forceDelete = function (id, callback) {
  var sql = `DELETE FROM courses WHERE id = ${id}`;
  db.query(sql, function (err, dataDb) {
    if (err) throw err;
    callback("Successfully deleted");
  });
};

module.exports = CourseModel;
