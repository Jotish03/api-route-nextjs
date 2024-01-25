import { writeFile, readFile } from "fs/promises"; // Importing specific functions from fs/promises

export async function POST(request) {
  try {
    // Extracting email and text from the request body
    const { email, text } = request.body;

    // Logging the request body for debugging
    console.log("Request Body:", email);

    // Creating a new feedback object with an ID and the provided email and text
    const newFeedback = {
      id: new Date().toISOString(),
      email,
      text,
    };

    // Reading the existing data from the JSON file
    const fileData = await readFile(
      process.cwd() + "/data/data-dummy.json",
      "utf8"
    );
    const data = JSON.parse(fileData);

    // Appending the new feedback to the existing data
    data.push(newFeedback);

    // Writing the updated data back to the JSON file
    await writeFile(
      process.cwd() + "/data/data-dummy.json",
      JSON.stringify(data)
    );

    // Returning a success response with the updated feedback
    return new Response(
      JSON.stringify({ message: "OK SUCCESS", feedback: newFeedback }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    // Handling errors and returning an error response
    console.error("Error writing to file:", error);
    return new Response(
      JSON.stringify({
        message: "Error writing to file",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
