import { SimpleGrid, VStack, Box, Text, Input, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import employeeService from "./employee.service";

function App() {
  const [employees, setEmployees] = useState([]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");

  useEffect(() => {
    employeeService
      .getAll()
      .then((response) => {
        console.log(response.data);
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendToDataBase = () => {
    const employeeObject = { name: name, location, department };

    setEmployees([...employees, employeeObject]);
    employeeService
      .create(employeeObject)
      .then((response) => {
        console.log("employee added successfully");
      })
      .catch((error) => {
        console.log("error");
      });
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

          <Button onClick={() => sendToDataBase()}>Post to databse</Button>
        </Box>

        <SimpleGrid mt={"2rem"} w={"70%"} minChildWidth="300px" spacing="40px">
          {employees.map((employee, key) => {
            return (
              <Box
                borderRadius="3rem"
                mb={"2rem"}
                p="5rem"
                border="1px"
                borderColor="gray.300"
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignText={"center"}
                key={key}
                textAlign="center"
              >
                <Box display={"flex"} justifyContent="space-evenly">
                  <Text>{employee.name}</Text>
                  <Text>{employee.location}</Text>
                  <Text>{employee.department}</Text>
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
