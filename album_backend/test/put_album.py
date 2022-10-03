# import requests
# import json

# host_url = f"http://localhost:3001/album/"
# data = {"bucket":"psalbum"}

# req_code = requests.put(host_url, json=data)
# print(req_code)

import requests
import json

url = "http://localhost:3001/album/"

headers = {
  'Content-Type': 'application/json'
}

response = requests.request("PUT", url, headers=headers, params={
    "bucket": "ps123"
})
print(response.text)
