import React, { useState } from 'react';
import './profile.css';
import wxQRCode from '../img/wx.jpg';
import tx from '../img/tx.jpg';
function Profile() {
  const [showWechat, setShowWechat] = useState(false);

  return (
    <div className="profile-page">
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={tx} alt="头像" />
          </div>
          <h1 className="profile-name">李杰</h1>
          <p className="profile-title">UI/UX 设计师</p>
        </div>
        
        <div className="profile-info">
          <div className="info-item">
            <i className="info-icon">👨</i>
            <span>男</span>
          </div>
          <div className="info-item">
            <i className="info-icon">📍</i>
            <span>上海市</span>
          </div>
          <div className="info-item">
            <i className="info-icon">💼</i>
            <span>自由设计师</span>
          </div>
          <div className="info-item">
            <i className="info-icon">📧</i>
            <span>lijie.design@email.com</span>
          </div>
        </div>

        <div className="profile-about">
          <h2>关于我</h2>
          <p>作为一名充满激情的设计师，我始终相信设计不仅仅是表面的美感，更是解决问题的有力工具。在过去的5年设计生涯中，我专注于用户体验与界面设计，致力于创造既美观又实用的数字产品。</p>
          <p>我热衷于将复杂的问题转化为简洁优雅的解决方案，善于倾听用户需求，并将其转化为具有创意的设计作品。同时，我也是一个终身学习者，持续关注设计领域的新趋势和创新技术。</p>
          <p>在工作之余，我喜欢摄影、插画创作和探索城市中的建筑美学。这些爱好不仅丰富了我的生活，也为我的设计工作提供了源源不断的灵感。</p>
        </div>

        <div className="profile-skills">
          <h2>技能专长</h2>
          <div className="skill-tags">
            <span className="skill-tag">UI设计</span>
            <span className="skill-tag">UX设计</span>
            <span className="skill-tag">Figma</span>
            <span className="skill-tag">Adobe XD</span>
            <span className="skill-tag">Photoshop</span>
            <span className="skill-tag">Illustrator</span>
            <span className="skill-tag">原型设计</span>
            <span className="skill-tag">用户研究</span>
            <span className="skill-tag">交互设计</span>
            <span className="skill-tag">品牌设计</span>
            <span className="skill-tag">响应式设计</span>
            <span className="skill-tag">设计系统</span>
          </div>
        </div>

        <div className="social-links">
          <a href="#" className="social-link" onClick={(e) => {
            e.preventDefault();
            setShowWechat(true);
          }}>
            <i className="social-icon">📱</i>
            微信
          </a>
          <a href="#" className="social-link">
            <i className="social-icon">🎨</i>
            Behance
          </a>
          <a href="#" className="social-link">
            <i className="social-icon">📝</i>
            作品集
          </a>
        </div>
      </div>

      {/* 微信二维码遮罩层 */}
      {showWechat && (
        <div className="overlay" onClick={() => setShowWechat(false)}>
          <div className="wechat-card" onClick={(e) => e.stopPropagation()}>
            <div className="wechat-content">
              <h3>我的微信号</h3>
              <p className="wechat-id">LJ09225Y</p>
              <div className="qrcode-wrapper">
                <img src={wxQRCode} alt="微信二维码" className="qrcode-image" />
              </div>
              <button className="close-button" onClick={() => setShowWechat(false)}>
                关闭
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile; 