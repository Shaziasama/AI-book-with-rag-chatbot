import requests
import os

API_BASE_URL = os.getenv("API_BASE_URL", "http://localhost:8000")
API_KEY = os.getenv("BACKEND_API_KEY", "your_secret_api_key")

def test_chat_api(query_text: str = "Hello, RAG agent!"):
    url = f"{API_BASE_URL}/v1/chat/query"
    headers = {
        "Content-Type": "application/json",
        "x-api-key": API_KEY,
    }
    payload = {"query": query_text}

    print(f"Testing API endpoint: {url}")
    print(f"Sending query: {query_text}")

    try:
        response = requests.post(url, headers=headers, json=payload)
        response.raise_for_status()  # Raise an exception for HTTP errors
        data = response.json()

        print(f"Received response: {data}")

        assert "response" in data
        assert isinstance(data["response"], str)
        assert f"You asked: '{query_text}'" in data["response"]

        print("Test passed: Response contains expected text.")
        return True
    except requests.exceptions.RequestException as e:
        print(f"Test failed: An error occurred during the API call: {e}")
        if hasattr(e, 'response') and e.response is not None:
            print(f"Response status code: {e.response.status_code}")
            print(f"Response body: {e.response.text}")
        return False
    except AssertionError:
        print("Test failed: Response content is not as expected.")
        return False

if __name__ == "__main__":
    # Ensure requests is installed in the poetry environment
    # os.system("poetry add requests") # This should be done manually if needed

    print("Starting API test...")
    result = test_chat_api()
    print(f"API test result: {'SUCCESS' if result else 'FAILURE'}")
