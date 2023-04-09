
export async function isMutedVideoAutoplaySupported(videoSrc) {
    return new Promise((resolve) => {
      const video = document.createElement('video');
      video.muted = true;
      video.autoplay = true;
      video.src = videoSrc;
  
      video.addEventListener('loadedmetadata', () => {
        if (video.readyState >= 1) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
  
      video.addEventListener('error', () => resolve(false));
      setTimeout(() => resolve(false), 3000);
    });
  }