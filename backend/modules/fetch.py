# modules
import httpx
# files
from .models import RedditPost

async def fetch_posts (subreddit: str) -> list[RedditPost]:
    response = await httpx.get("") # get data from subreddit
    data = response.json()
    print(data)
    return (RedditPost(**i) for i in data["data"])
