import { SimpleGrid, VStack, Box, Text, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import employeeService from "./employee.service";

function App() {
  const [employees, setEmployees] = useState([]);
  const [name, setName] = useState("");
  const [newDepartment, setNewDepartment] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    employeeService
      .getAll()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendToDataBase = () => {
    const employeeObject = { name: name, location, department };

    employeeService
      .create(employeeObject)
      .then((response) => {
        setEmployees([...employees, response.data]);
      })
      .catch((error) => {
        console.log("error");
      });
  };

  const update = (id) => {
    const employeeToUpdate = employees.filter((employee) => {
      return employee.id === id;
    });

    employeeService
      .update({
        id: id,
        name: employeeToUpdate[0].name,
        department: newDepartment,
        location: employeeToUpdate[0].location,
      })
      .then((response) => {
        console.log("employee's department udpated successfully");
      })
      .catch((error) => {
        console.log("error");
      });

    setEmployees(
      employees.map((employee) => {
        return employee.id === id
          ? {
              id: id,
              name: employeeToUpdate[0].name,
              department: newDepartment,
              location: employeeToUpdate[0].location,
            }
          : employee;
      })
    );
  };

  const deleteEmployee = (id) => {
    employeeService
      .deleteById(id)
      .then((response) => {
        console.log("employee deleted successfully");
      })
      .catch((error) => {
        console.log("error");
      });

    setEmployees(
      employees.filter((employee) => {
        return employee.id !== id;
      })
    );
  };

  return (
    <div className="App">
      <VStack minH={"100vh"} width={"100%"} minW={"300px"}>
        <Box
          mt={"2rem"}
          w={"70%"}
          justifyContent="center"
          textAlign={"center"}
          mb="2rem"
        >
          <Input
            placeholder="Enter name"
            borderColor="gray.700"
            mb={"2rem"}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <Input
            placeholder="Enter location"
            borderColor="gray.700"
            mb={"2rem"}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <Input
            placeholder="Enter department"
            borderColor="gray.700"
            mb={"2rem"}
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          />

          <Button onClick={() => sendToDataBase()}>Post to database</Button>
        </Box>

        <SimpleGrid mt={"2rem"} w={"80%"} minChildWidth="300px" spacing="40px">
          {employees.map((employee) => {
            return (
              <Box
                borderRadius="3rem"
                mb={"2rem"}
                p="5rem"
                border="1px"
                borderColor="gray.300"
                display={"flex"}
                flexDirection="column"
                alignText={"center"}
                key={employee.id}
                textAlign="center"
              >
                <Box justifyContent="space-evenly">
                  <Text>{employee.name}</Text>
                  <Text>{employee.location}</Text>
                  <Text mb={"2rem"}>{employee.department}</Text>
                  <Input
                    mb={"2rem"}
                    placeholder="Update department"
                    onChange={(e) => setNewDepartment(e.target.value)}
                  />
                  <Button
                    mb={"2rem"}
                    onClick={() => {
                      update(employee.id);
                    }}
                  >
                    Update Department
                  </Button>

                  <Button onClick={() => deleteEmployee(employee.id)}>
                    Delete employee
                  </Button>
                </Box>
              </Box>
            );
          })}
        </SimpleGrid>
      </VStack>
    </div>
  );
}

export default App;
