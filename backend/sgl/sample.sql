-- SELECT * FROM employee; -- 1030
-- SELECT * FROM salary;
-- SELECT * FROM department;
-- SELECT * FROM title;
-- SELECT * FROM department_employee; --  1114
-- SELECT * FROM department_manager;

-- SELECT * FROM employee e INNER JOIN department_employee de ON e.id = de.employee_id;
-- SELECT * FROM employee e RIGHT JOIN department_employee de ON e.id = de.employee_id;
-- SELECT e.id, e.first_name, de.from_date, d.dept_name FROM employee e 
-- INNER JOIN department_employee de ON e.id = de.employee_id 
-- INNER JOIN department d ON de.department_id = d.id;