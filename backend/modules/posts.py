# modules
from fastapi import APIRouter, HTTPException
from typing import List
# files
from .fetch import fetch_posts
from .models import RedditPost

router = APIRouter()

@router.get("", response_model=List[RedditPost])
async def read_posts(subreddit: str):
    posts = await fetch_posts(subreddit)
    if not posts:
        raise HTTPException("Post not found")
    return posts