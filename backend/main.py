# modules
from fastapi import FastAPI
# files
from modules.posts import router

app = FastAPI()
app.include_router(router, prefix="/posts", tags=["posts"])
