import React, { useState } from 'react';
import './photos.css';
import tx from '../img/tx.jpg';

// 模拟照片数据
const photoData = [
  {
    id: 1,
    title: '作品一',
    description: '设计作品展示',
    image: tx
  },
  {
    id: 2,
    title: '作品二',
    description: '界面设计',
    image: tx
  },
  // 添加更多照片，为了测试瀑布流效果，建议至少12张
  ...Array.from({ length: 10 }, (_, i) => ({
    id: i + 3,
    title: `作品${i + 3}`,
    description: '设计作品展示',
    image: tx
  }))
];

function Photos() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // 处理图片加载完成
  const handleImageLoad = (e) => {
    e.target.classList.add('loaded');
  };

  return (
    <div className="photos-page">
      <h1 className="photos-title">作品展示</h1>
      
      <div className="photos-masonry">
        {photoData.map(photo => (
          <div 
            key={photo.id} 
            className="photo-card"
            onClick={() => setSelectedPhoto(photo)}
          >
            <div className="photo-content">
              <img 
                src={photo.image} 
                alt={photo.title} 
                loading="lazy" 
                onLoad={handleImageLoad}
              />
              <div className="photo-info">
                <h3>{photo.title}</h3>
                <p>{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 照片放大遮罩层 */}
      {selectedPhoto && (
        <div 
          className="photo-overlay"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="photo-detail"
            onClick={e => e.stopPropagation()}
          >
            <img src={selectedPhoto.image} alt={selectedPhoto.title} />
            <div className="photo-detail-info">
              <h2>{selectedPhoto.title}</h2>
              <p>{selectedPhoto.description}</p>
            </div>
            <button 
              className="close-button"
              onClick={() => setSelectedPhoto(null)}
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Photos; 