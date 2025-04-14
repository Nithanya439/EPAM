var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var students = [];
function createStudent(student) {
    students.push(student);
    console.log("Student added successfully.");
}
function readStudents() {
    console.log("All Students:");
    students.forEach(function (s) {
        console.log("ID: ".concat(s.id, ", Name: ").concat(s.name, ", Age: ").concat(s.age, ", Course: ").concat(s.course));
    });
}
function updateStudent(id, updatedData) {
    var index = students.findIndex(function (s) { return s.id === id; });
    if (index !== -1) {
        students[index] = __assign(__assign({}, students[index]), updatedData);
        console.log("Student updated successfully.");
    }
    else {
        console.log("Student not found.");
    }
}
function deleteStudent(id) {
    var initialLength = students.length;
    students = students.filter(function (s) { return s.id !== id; });
    if (students.length < initialLength) {
        console.log("Student deleted successfully.");
    }
    else {
        console.log("Student not found.");
    }
}
// Example usage:
createStudent({ id: 1, name: "Alice", age: 20, course: "Computer Science" });
createStudent({ id: 2, name: "Bob", age: 21, course: "Data Science" });
readStudents();
updateStudent(1, { age: 22 });
deleteStudent(2);
readStudents();
