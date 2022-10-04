import requests

url = "http://localhost:3002/image/"

response = requests.request("DELETE", url, params={
    "bucket": "laptops-d03e1f4e",
    "key": "laptop.jfif"
})

print(response.status_code)
print(response.text)
