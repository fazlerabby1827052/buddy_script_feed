import React from "react";

export default function Reply({comtext,cu}) {
  return (
    <div className="_comment_main">
        
        <div class="_comment_image">
                <a href="profile.html" class="_comment_image_link">
                  <img
                    src="assets/images/txt_img.png"
                    alt=""
                    class="_comment_img1"
                  />
                </a>
              </div>
      <div class="_comment_details">
        <div class="_comment_details_top">
          <div class="_comment_name">
            <a href="profile.html ">
              <h4 class="_comment_name_title">{comtext.creator}</h4>
            </a>
          </div>
        </div>
        <div class="_comment_status">
          <p class="_comment_status_text">
            <span>
              {comtext.data}{" "}
            </span>
          </p>
        </div>
        {/* <div class="_total_reactions"> */}
          {/* <div class="_total_react"> */}
            {/* <span class="_reaction_like">
              
            </span> */}
            {/* <span class="_reaction_heart"> */}
              
            {/* </span> */}
          {/* </div> */}
          {/* <span class="_total"></span> */}
        {/* </div> */}
        <div class="_comment_reply">
          <div class="_comment_reply_num">
            <ul class="_comment_reply_list">
              <li>
                {/* <span>Like.</span> */}
              </li>
              <li>
                {/* <span>Reply.</span> */}
              </li>
              <li>
                {/* <span>Share</span> */}
              </li>
              <li>
                {/* <span class="_time_link"></span> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
        
    </div>
  );
}
