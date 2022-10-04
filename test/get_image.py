import requests

url = "http://localhost:3002/image/"

response = requests.request("GET", url, params={'bucket':'laptops-d03e1f4e'})

print(response.text)
