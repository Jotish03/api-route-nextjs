export async function POST(request) {
    if(request.method === 'POST'){
      const email = request.body.email
      const feedbackText = request.body.text

      const newFeedback = {
        id:new Date().toISOString(),
        email:email,
        text:feedbackText
      }
    }

    const filePath = 
}
