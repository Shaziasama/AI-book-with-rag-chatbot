from fastapi import FastAPI, Header, HTTPException, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional
import os
from dotenv import load_dotenv

# Load .env
load_dotenv()

# Environment keys
COHERE_API_KEY = os.getenv("COHERE_API_KEY")
QDRANT_API_KEY = os.getenv("QDRANT_API_KEY")
QDRANT_URL = os.getenv("QDRANT_URL")
API_KEY = os.getenv("BACKEND_API_KEY")  # Optional for x-api-key

app = FastAPI(title="RAG Agent Backend")

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Optional x-api-key Authentication ---
async def get_api_key(x_api_key: Optional[str] = Header(None, alias="x-api-key")):
    if API_KEY:  # Only check if API_KEY is set
        if not x_api_key or x_api_key != API_KEY:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid or Missing API Key",
            )
    return x_api_key

# --- API Models ---
class QueryRequest(BaseModel):
    query: str

class QueryResponse(BaseModel):
    response: str

# --- API Endpoints ---
@app.get("/")
async def root():
    return {"message": "RAG Agent Backend is running!"}

@app.post("/v1/chat/query", response_model=QueryResponse)
async def chat_query(request: QueryRequest, api_key: str = Depends(get_api_key)):
    """
    Accepts a user query and returns a response from the RAG agent.
    """
    print(f"Received query: {request.query}")

    # Example: Call Cohere + Qdrant RAG agent here
    # For now, just echo query
    response_text = f"You asked: '{request.query}'. The RAG agent is not yet connected."

    return QueryResponse(response=response_text)

