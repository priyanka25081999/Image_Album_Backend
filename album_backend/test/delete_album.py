import requests

url = "http://localhost:3001/album/"

response = requests.request("DELETE", url, params={
    "bucket":"san128"
})

print(response.status_code)
print(response.text)
