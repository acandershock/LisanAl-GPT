# 'Lisan al-GPT': *Dune*-Specialized Chatbot with RAG

**Team Members:** Lexy Andershock, Will Armentrout, Josef Govednik, Mehul Gupta, David Long, Colsen Murray

A standard language model can only answer questions based on what it learned during pretraining. It hallucinates facts that it doesn't know, has a knowledge cutoff, and knows nothing about a specific domain. Retrieval-Augmented Generation (RAG) solves this by giving the model a "retrieval system" — before generating an answer, the system searches a "knowledge base" for relevant passages and includes them in the prompt as context. Hence, the large language model's (LLM) job shifts from memorizing facts to reasoning over provided context. It is important to note that the LLM is never retrained. Its behavior changes entirely based on what the retriever finds.

Our team proposes "Lisan al-GPT", a RAG-based chatbot built to answer questions about the popular science fiction series *Dune* by Frank Herbert. *Dune* lore is a niche topic, so our baseline LLM without RAG likely won’t have much information about it, causing it to hallucinate/provide inaccurate information. The *Dune* books also have many words with specific spellings, which we hope will increase the similarity score of the vectors and make results easier to parse with RAG.

## Running locally
This will take a 3 steps: 
1. Starting the backend server
2. Updating the Node.js application
3. Starting the Node.js frontend

## 1. Starting the backend
Note: you will need an ngrok account to run this application. Sign up for free at https://ngrok.com/.

1. First, cd into the backend directory.
```
cd backend
```
2. Make sure you have all the book PDFs in your Google drive under the path 'content/drive/MyDrive.' You can just find your 'MyDrive' folder and throw them in there.
3. Then, run all cells in the Jupyter Notebook by clicking 'Run All.' Make sure you are connected to a Collab GPU!
4. In Cell 3b, update the auth_token variable to your value at https://dashboard.ngrok.com/get-started/your-authtoken.
- **IMPORTANT**: Do NOT push your auth_token to the repo!!!!
5. Copy the output from the print statement (`print_url`). For example is this is your output:
```
Your public API URL= NgrokTunnel: "https://a-b-c.ngrok-free.dev" -> "http://localhost:5000"
```
Then you would copy `"https://a-b-c.ngrok-free.dev"`.

## 2. Updating the Node.js application
1. Move the the frontend directory.
```
cd frontened/src
```
2. In App.jsx, change the CONST string at the top of the file to your copied `print_url` from step 1.
```
const REACT_APP_API_URL="https://a-b-c.ngrok-free.dev" \\ line 9
```

## 3. Starting the frontend
1. Finally, start the frontend and chat away!
```bash
cd frontend
npm install     # Install dependencies (first time only)
npm run dev     # Start dev server at http://localhost:3000
```
