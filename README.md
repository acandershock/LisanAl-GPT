# 'Lisan al-GPT': *Dune*-Specialized Chatbot with RAG

**Team Members:** Lexy Andershock, Will Armentrout, Josef Govednik, Mehul Gupta, David Long, Colsen Murray

A standard language model can only answer questions based on what it learned during pretraining. It hallucinates facts that it doesn't know, has a knowledge cutoff, and knows nothing about a specific domain. Retrieval-Augmented Generation (RAG) solves this by giving the model a "retrieval system" — before generating an answer, the system searches a "knowledge base" for relevant passages and includes them in the prompt as context. Hence, the large language model's (LLM) job shifts from memorizing facts to reasoning over provided context. It is important to note that the LLM is never retrained. Its behavior changes entirely based on what the retriever finds.

Our team proposes "Lisan al-GPT", a RAG-based chatbot built to answer questions about the popular science fiction series *Dune* by Frank Herbert. *Dune* lore is a niche topic, so our baseline LLM without RAG likely won’t have much information about it, causing it to hallucinate/provide inaccurate information. The *Dune* books also have many words with specific spellings, which we hope will increase the similarity score of the vectors and make results easier to parse with RAG.

## Running locally

```bash
cd frontend
npm install     # Install dependencies (first time only)
npm run dev     # Start dev server at http://localhost:3000
```