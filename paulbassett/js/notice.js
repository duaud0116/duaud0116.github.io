const noticeList = document.getElementById('noticeList');
  const items = [...noticeList.children];
  const itemHeight = items[0].offsetHeight;
  const playPauseBtn = document.getElementById('playPauseBtn');
  const noticeBox = document.getElementById('noticeBox');

  let index = 1; // 복제 때문에 1부터 시작
  let interval = null;
  let isPlaying = true;

  // ✅ 앞뒤로 복제 (무한 반복 효과)
  noticeList.prepend(items[items.length - 1].cloneNode(true));
  noticeList.append(items[0].cloneNode(true));

  noticeList.style.transform = `translateY(${-index * itemHeight}px)`;

  function moveUp() {
    index--;
    updatePosition();
  }

  function moveDown() {
    index++;
    updatePosition();
  }

  function updatePosition() {
    noticeList.style.transition = 'transform 0.5s';
    noticeList.style.transform = `translateY(${-index * itemHeight}px)`;

    noticeList.addEventListener('transitionend', () => {
      if (index === 0) {
        noticeList.style.transition = 'none';
        index = items.length;
        noticeList.style.transform = `translateY(${-index * itemHeight}px)`;
      }
      if (index === items.length + 1) {
        noticeList.style.transition = 'none';
        index = 1;
        noticeList.style.transform = `translateY(${-index * itemHeight}px)`;
      }
    }, { once: true });
  }

  function startAutoScroll() {
    interval = setInterval(moveDown, 2000);
  }

  function stopAutoScroll() {
    clearInterval(interval);
  }

  document.getElementById('upBtn').addEventListener('click', moveUp);
  document.getElementById('downBtn').addEventListener('click', moveDown);

  playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
      stopAutoScroll();
      playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
      startAutoScroll();
      playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
  });

  // 마우스 올리면 멈춤
  noticeBox.addEventListener('mouseenter', stopAutoScroll);
  // 마우스 벗어나면 다시 실행 (재생 상태일 때만)
  noticeBox.addEventListener('mouseleave', () => {
    if (isPlaying) startAutoScroll();
  });

  // 초기 자동 스크롤 시작
  startAutoScroll();