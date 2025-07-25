# modules
from pydantic import BaseModel # for models

# models

class RedditPost(BaseModel):
    id: str
    subreddit: str
    title: str
    content: str
    url: str