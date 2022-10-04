import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineUser} from 'react-icons/ai'
import {BsBoxArrowInUpRight} from 'react-icons/bs'
import {FaRegBookmark, FaBookmark, FaRegHeart, FaHeart, FaRegComment} from 'react-icons/fa'

function Post(props) {
    const postPic = props.post.postPictureSrc === undefined ? undefined : require(`../../assets/${props.post.postPictureSrc}`);
    const userPfp = props.post.userPictureSrc === undefined ? undefined : require(`../../assets/${props.post.userPictureSrc}`);
    const liked = true, bookmarked = true;

  return (
    <div className='post-card'>
        <div className='post-header'>
            <Link to={`/profile/${props.post.userName}`}>
                <div className='user-pic' >{userPfp === undefined? <AiOutlineUser /> : <img className='user-pic' src={userPfp} alt="pfp"/>}</div>
            </Link>
            <div className='text'>
                <Link className='user-name' to={`/profile/${props.post.userName}`}>{props.post.userName}</Link>
                <span className='post-location'>{props.post.postLocation}</span>
            </div>
        </div>
        <img className='post-pic' src={postPic} alt="post pic" />
        <div className='card-details'>
            <div className='reacts'>
                <div className='left'>
                    {liked === false ? <FaRegHeart /> : <FaHeart style={{color:'red'}} /> }
                    <FaRegComment />
                    <BsBoxArrowInUpRight />
                </div>
                <div className='right'>
                    {bookmarked === false? <FaRegBookmark /> : <FaBookmark style={{color:'green'}} /> }
                </div>
            </div>
            <p className='post-likes-cnt'>Liked by <span style={{fontWeight:'bold', cursor: 'pointer'}}>{props.post.postLikesCount}</span> people.</p>
            <p className='post-time'>Posted <span style={{fontSize:'12px'}}>{props.post.postTime}</span>.</p>
        </div>
        <input className='comment-input' placeholder='Add a comment...' />
    </div>
  )
}

export default Post