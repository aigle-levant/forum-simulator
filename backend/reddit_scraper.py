#env variables
from dotenv import load_dotenv 
import os
#reddit
import praw

# get environment variables
load_dotenv()
CLIENT_ID = os.getenv("REDDIT_ID")
SECRET = os.getenv("REDDIT_SECRET")
USER_AGENT=os.getenv("REDDIT_USER_AGENT")

reddit = praw.Reddit(
    client_id=CLIENT_ID,
    client_secret=SECRET,
    user_agent=USER_AGENT,
)


# scraping funct

async def scrape(name: str, limit=100):
    subreddit = reddit.subreddit(name)
    posts = []
    
    # scraping main loop
    for post in subreddit.best(limit=limit):
        posts.append({
            "title": post.title,
            "content": post.selftext
            "subreddit": name
        })