// 1. KHỞI TẠO KHI TRANG LOAD XONG
document.addEventListener('DOMContentLoaded', () => {
    console.log("Hệ thống Trí Tuệ Xanh đã sẵn sàng!");
    initScrollReveal();
    initCounterEffect();
});

// 2. HIỆU ỨNG CUỘN TRANG (SCROLL REVEAL)
// Giúp các mục hiện ra mượt mà khi người dùng cuộn tới
function initScrollReveal() {
    const sections = document.querySelectorAll('.report-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Nếu là Mục 01, kích hoạt hiệu ứng biểu đồ
                if (entry.target.id === 'sec1') {
                    animateBars();
                }
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
        section.style.transition = 'all 0.8s ease-out';
        observer.observe(section);
    });
}

// 3. HIỆU ỨNG BIỂU ĐỒ MỤC 01 (ANIMATE BARS)
function animateBars() {
    const bars = document.querySelectorAll('.bar-item');
    bars.forEach(bar => {
        // Lấy chiều cao thực từ thuộc tính style trong HTML
        const targetHeight = bar.style.height;
        bar.style.height = '0'; // Đưa về 0 trước
        
        setTimeout(() => {
            bar.style.height = targetHeight; // Sau đó mới mọc lên
        }, 200);
    });
}

// 4. HIỆU ỨNG SỐ CHẠY (COUNTER)
function initCounterEffect() {
    const counters = document.querySelectorAll('.bar-item .val');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseFloat(target.innerText);
                let count = 0;
                const speed = 2000 / countTo; // Thời gian chạy là 2 giây

                const updateCount = () => {
                    count += countTo / 100;
                    if (count < countTo) {
                        target.innerText = count.toFixed(1);
                        setTimeout(updateCount, 20);
                    } else {
                        target.innerText = countTo;
                    }
                };
                updateCount();
                counterObserver.unobserve(target); // Chỉ chạy 1 lần
            }
        });
    }, { threshold: 1 });

    counters.forEach(c => counterObserver.observe(c));
}

// 5. XỬ LÝ NAVIGATION (MENU MƯỢT MÀ)
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// 6. HIỆU ỨNG CHO MỤC 02 (NGUYÊN NHÂN)
function initSection2Effects() {
    const section2 = document.querySelector('#sec2');
    if (!section2) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Kích hoạt hiệu ứng xoay cho các icon Donut
                const donutIcons = entry.target.querySelectorAll('.donut-item img, .donut-main img');
                donutIcons.forEach((img, index) => {
                    setTimeout(() => {
                        img.style.transform = 'scale(1.1) rotate(360deg)';
                        img.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        
                        // Sau khi xoay xong thì trả về trạng thái scale bình thường
                        setTimeout(() => {
                            img.style.transform = 'scale(1) rotate(0deg)';
                        }, 1000);
                    }, index * 150); // Hiệu ứng đuổi nhau (stagger)
                });

                // Hiệu ứng hiện dần cho các lưới biểu đồ 2x2
                const gridItems = entry.target.querySelectorAll('.grid-item');
                gridItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    item.style.transition = 'all 0.6s ease-out';
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 300 + (index * 200));
                });

                // Ngừng quan sát sau khi đã chạy hiệu ứng
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(section2);
}

// Gọi hàm khởi tạo trong DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    initSection2Effects();
});
// 7. HIỆU ỨNG CHO MỤC 03 (TÁC HẠI & SỨC KHỎE)
function initSection3Effects() {
    const section3 = document.querySelector('#sec3');
    if (!section3) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Hiệu ứng biểu đồ cột kép (Health Chart)
                const barGroups = entry.target.querySelectorAll('.bar-group');
                barGroups.forEach((group, groupIndex) => {
                    const bars = group.querySelectorAll('.bar-v2');
                    bars.forEach((bar, barIndex) => {
                        // Lấy chiều cao từ thuộc tính style
                        const finalHeight = bar.style.height;
                        bar.style.height = '0';
                        bar.style.opacity = '0';
                        
                        setTimeout(() => {
                            bar.style.transition = 'all 0.8s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
                            bar.style.height = finalHeight;
                            bar.style.opacity = '1';
                        }, 200 + (groupIndex * 150) + (barIndex * 100));
                    });
                });

                // 2. Hiệu ứng nhãn dán trên sơ đồ con cá (Label Tags)
                const tags = entry.target.querySelectorAll('.label-tag');
                tags.forEach((tag, index) => {
                    tag.style.opacity = '0';
                    tag.style.transform = 'scale(0) rotate(-20deg)';
                    
                    setTimeout(() => {
                        tag.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        tag.style.opacity = '1';
                        tag.style.transform = 'scale(1) rotate(0deg)';
                    }, 800 + (index * 200));
                });

                // 3. Hiệu ứng các ô tác động nhỏ phía dưới
                const impactBoxes = entry.target.querySelectorAll('.impact-box');
                impactBoxes.forEach((box, index) => {
                    box.style.opacity = '0';
                    box.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        box.style.transition = 'all 0.5s ease-out';
                        box.style.opacity = '1';
                        box.style.transform = 'translateY(0)';
                    }, 1200 + (index * 100));
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(section3);
}

// Cập nhật hàm khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    initSection3Effects();
});
// 8. HIỆU ỨNG CHO MỤC 04 (LỘ TRÌNH NET ZERO)
function initSection4Effects() {
    const section4 = document.querySelector('#sec4');
    if (!section4) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Hiệu ứng các điểm nút thời gian (Timeline Nodes)
                const nodes = entry.target.querySelectorAll('.time-node');
                nodes.forEach((node, index) => {
                    node.style.opacity = '0';
                    node.style.transform = 'scale(0) translateY(-20px)';
                    
                    setTimeout(() => {
                        node.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        node.style.opacity = '1';
                        node.style.transform = 'scale(1) translateY(0)';
                        
                        // Nếu là điểm highlight (2050), thêm hiệu ứng nhấp nháy (pulse)
                        if (node.classList.contains('highlight')) {
                            setTimeout(() => {
                                node.style.animation = 'pulse 2s infinite';
                            }, 600);
                        }
                    }, 300 + (index * 250)); // Hiện lần lượt từ 2010 đến 2050
                });

                // 2. Hiệu ứng các ô so sánh năm (Year Boxes)
                const yearBoxes = entry.target.querySelectorAll('.year-box');
                yearBoxes.forEach((box, index) => {
                    box.style.opacity = '0';
                    box.style.transform = 'translateX(-30px)';
                    
                    setTimeout(() => {
                        box.style.transition = 'all 0.5s ease-out';
                        box.style.opacity = '1';
                        box.style.transform = 'translateX(0)';
                    }, 1500 + (index * 200));
                });

                // 3. Hiệu ứng xoay nhẹ cho vòng tròn giải pháp
                const solutionCircle = entry.target.querySelector('.solution-circle img');
                if (solutionCircle) {
                    solutionCircle.style.transform = 'rotate(-180deg) scale(0.5)';
                    solutionCircle.style.opacity = '0';
                    
                    setTimeout(() => {
                        solutionCircle.style.transition = 'all 1.2s cubic-bezier(0.19, 1, 0.22, 1)';
                        solutionCircle.style.transform = 'rotate(0deg) scale(1)';
                        solutionCircle.style.opacity = '1';
                    }, 800);
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(section4);
}

// Thêm CSS Animation cho điểm Net Zero vào header hoặc file CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(241, 196, 15, 0.7); }
        70% { box-shadow: 0 0 0 15px rgba(241, 196, 15, 0); }
        100% { box-shadow: 0 0 0 0 rgba(241, 196, 15, 0); }
    }
`;
document.head.appendChild(style);

// Cập nhật hàm khởi tạo chính
document.addEventListener('DOMContentLoaded', () => {
    initSection4Effects();
});
// 8. HIỆU ỨNG CHO MỤC 04 (LỘ TRÌNH NET ZERO)
function initSection4Effects() {
    const section4 = document.querySelector('#sec4');
    if (!section4) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Hiệu ứng các điểm nút thời gian (Timeline Nodes)
                const nodes = entry.target.querySelectorAll('.time-node');
                nodes.forEach((node, index) => {
                    node.style.opacity = '0';
                    node.style.transform = 'scale(0) translateY(-20px)';
                    
                    setTimeout(() => {
                        node.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        node.style.opacity = '1';
                        node.style.transform = 'scale(1) translateY(0)';
                        
                        // Nếu là điểm highlight (2050), thêm hiệu ứng nhấp nháy (pulse)
                        if (node.classList.contains('highlight')) {
                            setTimeout(() => {
                                node.style.animation = 'pulse 2s infinite';
                            }, 600);
                        }
                    }, 300 + (index * 250)); // Hiện lần lượt từ 2010 đến 2050
                });

                // 2. Hiệu ứng các ô so sánh năm (Year Boxes)
                const yearBoxes = entry.target.querySelectorAll('.year-box');
                yearBoxes.forEach((box, index) => {
                    box.style.opacity = '0';
                    box.style.transform = 'translateX(-30px)';
                    
                    setTimeout(() => {
                        box.style.transition = 'all 0.5s ease-out';
                        box.style.opacity = '1';
                        box.style.transform = 'translateX(0)';
                    }, 1500 + (index * 200));
                });

                // 3. Hiệu ứng xoay nhẹ cho vòng tròn giải pháp
                const solutionCircle = entry.target.querySelector('.solution-circle img');
                if (solutionCircle) {
                    solutionCircle.style.transform = 'rotate(-180deg) scale(0.5)';
                    solutionCircle.style.opacity = '0';
                    
                    setTimeout(() => {
                        solutionCircle.style.transition = 'all 1.2s cubic-bezier(0.19, 1, 0.22, 1)';
                        solutionCircle.style.transform = 'rotate(0deg) scale(1)';
                        solutionCircle.style.opacity = '1';
                    }, 800);
                }

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(section4);
}

// Thêm CSS Animation cho điểm Net Zero vào header hoặc file CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { box-shadow: 0 0 0 0 rgba(241, 196, 15, 0.7); }
        70% { box-shadow: 0 0 0 15px rgba(241, 196, 15, 0); }
        100% { box-shadow: 0 0 0 0 rgba(241, 196, 15, 0); }
    }
`;
document.head.appendChild(style);

// Cập nhật hàm khởi tạo chính
document.addEventListener('DOMContentLoaded', () => {
    initSection4Effects();
});
// 10. HIỆU ỨNG CHO MỤC 06 (BIỂU ĐỒ BÁO ĐỘNG ĐỎ)
function initSection6Effects() {
    const section6 = document.querySelector('#sec6');
    if (!section6) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Hiệu ứng các cột đỏ chính (Big Bars)
                const bigBars = entry.target.querySelectorAll('.b-item');
                bigBars.forEach((bar, index) => {
                    const finalHeight = bar.style.height;
                    bar.style.height = '0';
                    bar.style.opacity = '0';
                    
                    setTimeout(() => {
                        bar.style.transition = 'all 1s cubic-bezier(0.22, 1, 0.36, 1)';
                        bar.style.height = finalHeight;
                        bar.style.opacity = '1';
                        
                        // Nếu là cột 2026 (active), thêm hiệu ứng rung nhẹ khi mọc xong
                        if (bar.classList.contains('active')) {
                            setTimeout(() => {
                                bar.style.animation = 'shakeAlert 0.5s ease-in-out';
                            }, 1000);
                        }
                    }, index * 200);
                });

                // 2. Hiệu ứng biểu đồ cột đôi (Bar Pairs)
                const barPairs = entry.target.querySelectorAll('.bar-pair div');
                barPairs.forEach((subBar, index) => {
                    const h = subBar.style.height;
                    subBar.style.height = '0';
                    setTimeout(() => {
                        subBar.style.transition = 'height 0.8s ease-out';
                        subBar.style.height = h;
                    }, 800 + (index * 50));
                });

                // 3. Hiệu ứng hiện các ô thời gian rác (Waste Boxes)
                const wasteBoxes = entry.target.querySelectorAll('.w-box');
                wasteBoxes.forEach((box, index) => {
                    box.style.opacity = '0';
                    box.style.transform = 'scale(0.5)';
                    
                    setTimeout(() => {
                        box.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        box.style.opacity = '1';
                        box.style.transform = 'scale(1)';
                    }, 1200 + (index * 150));
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section6);
}

// Thêm hiệu ứng rung cảnh báo cho cột đỏ
const styleAlert = document.createElement('style');
styleAlert.textContent = `
    @keyframes shakeAlert {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(styleAlert);

// Cập nhật hàm khởi tạo
document.addEventListener('DOMContentLoaded', () => {
    initSection6Effects();
});
// 11. HIỆU ỨNG CHO MỤC 07 (VÒNG ĐỜI RÁC THẢI)
function initSection7Effects() {
    const section7 = document.querySelector('#sec7');
    if (!section7) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Hiệu ứng trượt ngang cho danh sách phân hủy (Decomposition Items)
                const decomItems = entry.target.querySelectorAll('.decom-item');
                decomItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateX(50px)';
                    item.style.transition = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, 300 + (index * 200)); // Hiện lần lượt từ trên xuống
                });

                // 2. Hiệu ứng cho khối hình ảnh thực tế (Lifecycle Visual)
                const visual = entry.target.querySelector('.lifecycle-visual');
                if (visual) {
                    visual.style.opacity = '0';
                    visual.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        visual.style.transition = 'all 0.8s ease-out';
                        visual.style.opacity = '1';
                        visual.style.transform = 'scale(1)';
                    }, 500);
                }

                // 3. Hiệu ứng "nhảy" số năm (Year Labels)
                const yearLabels = entry.target.querySelectorAll('.year-label');
                yearLabels.forEach((label, index) => {
                    label.style.transform = 'scale(0)';
                    setTimeout(() => {
                        label.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        label.style.transform = 'scale(1)';
                    }, 1000 + (index * 200));
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section7);
}

// Cập nhật hàm khởi tạo chính
document.addEventListener('DOMContentLoaded', () => {
    initSection7Effects();
});
// 12. HIỆU ỨNG CHO MỤC 08 (ĐIỂM NÓNG Ô NHIỄM)
function initSection8Effects() {
    const section8 = document.querySelector('#sec8');
    if (!section8) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Hiệu ứng hình ảnh điểm nóng (Color Reveal)
                const hotspotImgs = entry.target.querySelectorAll('.dual-images-v8 img');
                hotspotImgs.forEach((img, index) => {
                    img.style.filter = 'grayscale(1) brightness(0.5)';
                    img.style.transform = 'scale(0.8)';
                    img.style.opacity = '0';
                    
                    setTimeout(() => {
                        img.style.transition = 'all 1.2s cubic-bezier(0.23, 1, 0.32, 1)';
                        img.style.filter = 'grayscale(0.3) brightness(1)'; // Giữ lại chút xám để tạo cảm giác u ám
                        img.style.transform = 'scale(1)';
                        img.style.opacity = '1';
                    }, 300 + (index * 400));
                });

                // 2. Hiệu ứng các con số % (Donut Stats)
                const statItems = entry.target.querySelectorAll('.d-item');
                statItems.forEach((item, index) => {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        item.style.transition = 'all 0.6s ease-out';
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                        
                        // Nếu có thẻ span chứa số, có thể thêm hiệu ứng nhấp nháy đỏ
                        item.style.animation = 'pulseRed 2s infinite';
                    }, 1000 + (index * 200));
                });

                // 3. Hiệu ứng lưới chi tiết rác thải (Waste Detail)
                const details = entry.target.querySelectorAll('.waste-detail-v8 .decom-item');
                details.forEach((detail, index) => {
                    detail.style.opacity = '0';
                    detail.style.transform = 'scale(0.9)';
                    
                    setTimeout(() => {
                        detail.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        detail.style.opacity = '1';
                        detail.style.transform = 'scale(1)';
                    }, 1500 + (index * 150));
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    observer.observe(section8);
}

// Thêm hiệu ứng nhấp nháy đỏ cho cảnh báo điểm nóng
const styleHotspot = document.createElement('style');
styleHotspot.textContent = `
    @keyframes pulseRed {
        0% { text-shadow: 0 0 0px rgba(231, 76, 60, 0); }
        50% { text-shadow: 0 0 10px rgba(231, 76, 60, 0.5); }
        100% { text-shadow: 0 0 0px rgba(231, 76, 60, 0); }
    }
`;
document.head.appendChild(styleHotspot);

// Cập nhật hàm khởi tạo chính
document.addEventListener('DOMContentLoaded', () => {
    initSection8Effects();
});
// 13. HIỆU ỨNG CHO MỤC 09 (TÀI NGUYÊN TÁI CHẾ)
function initSection9Effects() {
    const section9 = document.querySelector('#sec9');
    if (!section9) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Hiệu ứng thẻ sản phẩm tái chế (Upcycle Cards)
                const cards = entry.target.querySelectorAll('.upcycle-card');
                cards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8) translateY(30px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1) translateY(0)';
                    }, index * 200); // Hiện đuổi nhau sinh động
                });

                // 2. Hiệu ứng nhãn "How-to" (Badge Pop)
                const badges = entry.target.querySelectorAll('.how-to');
                badges.forEach((badge, index) => {
                    badge.style.transform = 'translateX(-20px)';
                    badge.style.opacity = '0';
                    
                    setTimeout(() => {
                        badge.style.transition = 'all 0.5s ease-out';
                        badge.style.transform = 'translateX(0)';
                        badge.style.opacity = '1';
                    }, 800 + (index * 200));
                });

                // 3. Hiệu ứng biểu đồ tác động xanh (Green Stats)
                const greenStats = entry.target.querySelectorAll('.d-v9');
                greenStats.forEach((stat, index) => {
                    stat.style.opacity = '0';
                    stat.style.transform = 'rotate(-10deg)';
                    
                    setTimeout(() => {
                        stat.style.transition = 'all 0.8s ease-out';
                        stat.style.opacity = '1';
                        stat.style.transform = 'rotate(0deg)';
                        
                        // Thêm hiệu ứng hào quang xanh nhạt
                        stat.style.textShadow = '0 0 10px rgba(46, 204, 113, 0.3)';
                    }, 1200 + (index * 200));
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    observer.observe(section9);
}

// Cập nhật hàm khởi tạo chính
document.addEventListener('DOMContentLoaded', () => {
    initSection9Effects();
});
// 14. HIỆU ỨNG CHO MỤC 10 (DẤU CHÂN CARBON)
function initSection10Effects() {
    const section10 = document.querySelector('#sec10');
    if (!section10) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // 1. Hiệu ứng nhảy số cho Dấu chân Carbon (Carbon Value Counter)
                const carbonValue = entry.target.querySelector('.carbon-value');
                if (carbonValue) {
                    const targetVal = 40.5; // Con số mục tiêu (tỷ tấn)
                    let currentVal = 0;
                    const duration = 2000; // Chạy trong 2 giây
                    const increment = targetVal / (duration / 16);

                    const updateCounter = () => {
                        currentVal += increment;
                        if (currentVal < targetVal) {
                            carbonValue.innerHTML = currentVal.toFixed(1) + ' <span>tỷ tấn/năm</span>';
                            requestAnimationFrame(updateCounter);
                        } else {
                            carbonValue.innerHTML = targetVal + ' <span>tỷ tấn/năm</span>';
                        }
                    };
                    updateCounter();
                }

                // 2. Hiệu ứng thẻ giải pháp (Solution Cards)
                const solutionCards = entry.target.querySelectorAll('.solution-card');
                solutionCards.forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(30px)';
                    
                    setTimeout(() => {
                        card.style.transition = 'all 0.6s ease-out';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 500 + (index * 200));
                });

                // 3. Hiệu ứng các vòng tròn thống kê cuối (Stats Footer)
                const finalDonuts = entry.target.querySelectorAll('.d-v10');
                finalDonuts.forEach((donut, index) => {
                    donut.style.opacity = '0';
                    donut.style.transform = 'scale(0)';
                    
                    setTimeout(() => {
                        donut.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                        donut.style.opacity = '1';
                        donut.style.transform = 'scale(1)';
                    }, 1200 + (index * 200));
                });

                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(section10);
}

// KHỞI TẠO TẤT CẢ CÁC HÀM KHI DOM SẴN SÀNG
document.addEventListener('DOMContentLoaded', () => {
    // Các mục đã hướng dẫn trước đó
    if (typeof initSection1Effects === 'function') initSection1Effects();
    if (typeof initSection2Effects === 'function') initSection2Effects();
    // ... gọi các hàm từ 1 đến 9 ...
    
    // Gọi hàm mục 10
    initSection10Effects();
});
/* ============================================================
   HỆ THỐNG 3 TRÒ CHƠI: CHIẾN BINH XANH (THỬ THÁCH 30 GIÂY)
   ============================================================ */

// BIẾN TOÀN CỤC CHO CÁC GAME
let sortScore = 0;
let oceanScore = 0;
let carbonScore = 100; // Bắt đầu với 100% môi trường sạch

// --- TRÒ CHƠI 1: PHÂN LOẠI RÁC (DRAG & DROP) ---
const trashList = [
    { name: '🍎 Vỏ táo', type: 'organic' },
    { name: '🥤 Chai nhựa', type: 'recycle' },
    { name: '🛍️ Túi nilon', type: 'inorganic' },
    { name: '📜 Giấy báo', type: 'recycle' },
    { name: '🦴 Xương cá', type: 'organic' },
    { name: '🔋 Pin hỏng', type: 'inorganic' }
];

function initSortGame() {
    const trashItem = document.getElementById('trash-item');
    const bins = document.querySelectorAll('.bin');
    if (!trashItem) return;

    // Chọn ngẫu nhiên một món rác
    let currentTrash = trashList[Math.floor(Math.random() * trashList.length)];
    trashItem.innerText = currentTrash.name;
    trashItem.dataset.type = currentTrash.type;

    // Sự kiện kéo (Drag)
    trashItem.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('type', currentTrash.type);
        trashItem.style.opacity = '0.5';
    });

    trashItem.addEventListener('dragend', () => {
        trashItem.style.opacity = '1';
    });

    // Sự kiện thả (Drop) vào thùng rác
    bins.forEach(bin => {
        bin.addEventListener('dragover', (e) => e.preventDefault());
        bin.addEventListener('drop', (e) => {
            const droppedType = e.dataTransfer.getData('type');
            const binType = bin.dataset.type;

            if (droppedType === binType) {
                sortScore += 10;
                showGameEffect(bin, '✅ +10', '#2ecc71');
            } else {
                sortScore -= 5;
                showGameEffect(bin, '❌ -5', '#e74c3c');
            }

            document.getElementById('sort-score').innerText = `Điểm: ${sortScore}`;
            
            // Đổi món rác mới sau khi thả
            currentTrash = trashList[Math.floor(Math.random() * trashList.length)];
            trashItem.innerText = currentTrash.name;
            trashItem.dataset.type = currentTrash.type;
        });
    });
}

// --- TRÒ CHƠI 2: GIẢI CỨU ĐẠI DƯƠNG (CLICK REFLEX) ---
function initOceanGame() {
    const ocean = document.getElementById('ocean-screen');
    if (!ocean) return;

    // Tạo rác ngẫu nhiên mỗi 1.5 giây
    setInterval(() => {
        const wasteIcons = ['🍾', '🛍️', '📦', '🏮'];
        const waste = document.createElement('div');
        waste.className = 'waste-piece';
        waste.innerText = wasteIcons[Math.floor(Math.random() * wasteIcons.length)];
        
        // Vị trí ngẫu nhiên
        waste.style.left = Math.random() * 85 + '%';
        waste.style.top = Math.random() * 80 + '%';
        waste.style.position = 'absolute';
        waste.style.fontSize = '30px';
        waste.style.cursor = 'pointer';
        waste.style.transition = 'transform 0.2s';

        waste.onclick = () => {
            oceanScore++;
            document.getElementById('click-score').innerText = `Đã dọn: ${oceanScore}`;
            waste.style.transform = 'scale(0)'; // Hiệu ứng biến mất
            setTimeout(() => waste.remove(), 200);
        };

        ocean.appendChild(waste);

        // Rác tự biến mất sau 2.5 giây nếu không kịp dọn
        setTimeout(() => { if(waste) waste.remove(); }, 2500);
    }, 1500);
}

// --- TRÒ CHƠI 3: THỬ THÁCH SỐNG XANH (QUICK CHOICE) ---
const carbonQuests = [
    { q: "Đi học bằng gì?", a1: "🚲 Xe đạp (+10)", a2: "🛵 Xe máy (-10)", correct: 1 },
    { q: "Dùng túi gì đi chợ?", a1: "🛍️ Túi vải (+10)", a2: "🛍️ Túi nilon (-10)", correct: 1 },
    { q: "Rời phòng nhớ làm gì?", a1: "💡 Tắt điện (+10)", a2: "🧊 Để điều hòa (-10)", correct: 1 }
];

function initCarbonGame() {
    const questEl = document.getElementById('quest-text');
    const btn1 = document.getElementById('btn-choice-1');
    const btn2 = document.getElementById('btn-choice-2');
    if (!questEl) return;

    let currentQ = 0;

    const loadQuest = () => {
        const q = carbonQuests[currentQ];
        questEl.innerText = q.q;
        btn1.innerText = q.a1;
        btn2.innerText = q.a2;
    };

    const handleChoice = (choice) => {
        if (choice === carbonQuests[currentQ].correct) {
            carbonScore += 10;
        } else {
            carbonScore -= 10;
        }
        document.getElementById('carbon-score').innerText = `Môi trường: ${carbonScore}%`;
        
        currentQ = (currentQ + 1) % carbonQuests.length; // Lặp lại câu hỏi
        loadQuest();
    };

    btn1.onclick = () => handleChoice(1);
    btn2.onclick = () => handleChoice(2);

    loadQuest();
}

// --- HÀM HỖ TRỢ HIỆU ỨNG THÔNG BÁO NHANH ---
function showGameEffect(el, text, color) {
    const effect = document.createElement('div');
    effect.innerText = text;
    effect.style.position = 'absolute';
    effect.style.top = '-20px';
    effect.style.color = color;
    effect.style.fontWeight = 'bold';
    effect.style.animation = 'fadeOutUp 1s forwards';
    el.style.position = 'relative';
    el.appendChild(effect);
    setTimeout(() => effect.remove(), 1000);
}

// --- KHỞI CHẠY TẤT CẢ ---
document.addEventListener('DOMContentLoaded', () => {
    initSortGame();
    initOceanGame();
    initCarbonGame();
});

// Thêm animation CSS vào trang cho hiệu ứng cộng điểm
const gameStyle = document.createElement('style');
gameStyle.textContent = `
    @keyframes fadeOutUp {
        0% { opacity: 1; transform: translateY(0); }
        100% { opacity: 0; transform: translateY(-30px); }
    }
    .waste-piece:hover { transform: scale(1.2); }
`;
document.head.appendChild(gameStyle);
