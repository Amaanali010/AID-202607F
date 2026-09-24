/* =========================================================
   MongoDB Course - Master Sample Dataset Script
   Run this in mongosh (or paste into Compass shell) so the
   SAME data is used consistently across Classes 1-20.
   ========================================================= */

use schoolDB;

// Clean start (safe to re-run this script)
db.students.drop();
db.courses.drop();

// =========================
// 1. COURSES COLLECTION
// =========================
db.courses.insertMany([
  { _id: 101, courseName: "Math",             instructor: "Mr. Khan" },
  { _id: 102, courseName: "Science",          instructor: "Ms. Ali" },
  { _id: 103, courseName: "English",          instructor: "Mr. Raza" },
  { _id: 104, courseName: "Computer Science", instructor: "Ms. Fatima" }
  // Note: Course 104 intentionally has NO students enrolled (for $lookup / left-join style lessons)
]);

// =========================
// 2. STUDENTS COLLECTION
// =========================
db.students.insertMany([
  {
    _id: 1, name: "Aisha", age: 20, city: "Lahore",
    enrollDate: new Date("2026-01-10"),
    skills: ["SQL", "Python"],
    courseIds: [101, 102],
    address: { street: "12 Mall Road", city: "Lahore", zip: "54000" }
  },
  {
    _id: 2, name: "Bilal", age: 22, city: "Karachi",
    enrollDate: new Date("2026-01-15"),
    skills: ["JavaScript"],
    courseIds: [101],
    address: { street: "45 Clifton Ave", city: "Karachi", zip: "75600" }
  },
  {
    _id: 3, name: "Sara", age: 21, city: "Islamabad",
    enrollDate: new Date("2026-02-01"),
    skills: ["MongoDB", "Node.js"],
    courseIds: [102],
    address: { street: "7 F-10 Markaz", city: "Islamabad", zip: "44000" }
  },
  {
    _id: 4, name: "Omar", age: 19, city: "Lahore",
    enrollDate: new Date("2026-02-10"),
    skills: ["SQL"],
    courseIds: [101],
    address: { street: "3 Model Town", city: "Lahore", zip: "54700" }
  },
  {
    _id: 5, name: "Hina", age: 23, city: "Multan",
    enrollDate: new Date("2026-03-05"),
    skills: ["Python", "Docker"],
    courseIds: [103],
    address: { street: "22 Cantt", city: "Multan", zip: "60000" }
  },
  {
    _id: 6, name: "Zain", age: 24, city: "Peshawar",
    enrollDate: new Date("2026-03-20"),
    skills: ["Java"],
    courseIds: [103],
    address: { street: "9 University Rd", city: "Peshawar", zip: "25000" }
  },
  {
    _id: 7, name: "Nadia", age: null, city: "Quetta",     // NULL age example
    enrollDate: new Date("2026-04-01"),
    skills: [],
    courseIds: [],                                        // not enrolled in any course
    address: { street: "5 Jinnah Rd", city: "Quetta", zip: "87300" }
  },
  {
    _id: 8, name: "Kamran", age: 20,                      // missing 'city' field on purpose
    enrollDate: new Date("2026-04-15"),
    skills: ["SQL", "MongoDB"],
    courseIds: []                                         // not enrolled in any course
  },
  {
    _id: 9, name: "Fatima", age: 22, city: "Karachi",
    enrollDate: new Date("2026-05-01"),
    skills: ["Python", "MongoDB", "SQL"],
    courseIds: [102],
    address: { street: "18 DHA Phase 5", city: "Karachi", zip: "75500" }
  },
  {
    _id: 10, name: "Ali", age: 21, city: "Islamabad",
    enrollDate: new Date("2026-05-10"),
    skills: ["C++"],
    courseIds: [101, 103],
    address: { street: "2 G-9 Markaz", city: "Islamabad", zip: "44080" }
  }
]);

// =========================
// Quick check: view all data
// =========================
print("--- Students ---");
db.students.find().pretty();
print("--- Courses ---");
db.courses.find().pretty();
