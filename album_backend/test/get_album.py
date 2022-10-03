# Get album
import requests
import json

host_url = "http://localhost:3001"
resp_code = requests.get(host_url+"/album/")
print(resp_code)

resp_res = (json.dumps(resp_code.json(), indent=4))
print(resp_res)

'''
$ python get_album.py 
<Response [200]>
{
    "isDone": true,
    "buckets": [
        {
            "Name": "laptops-d03e1f4e",
            "CreationDate": "2022-10-02T14:10:20.000Z"
        },
        {
            "Name": "personaldata-f4341c63",
            "CreationDate": "2022-10-02T14:13:45.000Z"
        }
    ]
}
'''