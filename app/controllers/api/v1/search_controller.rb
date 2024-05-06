class Api::V1::SearchController < ApplicationController
  def posts
    @posts = Post.where("title LIKE ? OR body LIKE ?", "%#{params[:q]}%", "%#{params[:q]}%")

    posts_with_images = @posts.map do |post|
      if post.image.attached?
        post.as_json_merge(image_url: url_for(post.image))
      else
        post.as_json_merge(image_url: nil)
      end
    end     
    render json: posts_with_images
  end
end
