const scheduleData = {
    "شنبه": [
        { "time": "12:00 - 14:00", "class": "داستان نویسی" , "teacher": "محمد محمدزاده"},
      { "time": "14:00 - 16:30", "class": "دوبله" , "teacher": "محمد محمدزاده"},
    ],

    "یک‌‌شنبه": [
        { "time": "13:30 - 15:00", "class": "گویندگی" , "teacher": "بهنام صادقی"},
    ],

    "دوشنبه": [
       { "time": "17:00 - 19:00", "class": "داستان نویسی" , "teacher": "محمد محمدزاده"},
    ],

    "سه‌شنبه": [
        
        

    ],

    "چهارشنبه": [
    ],
    "پنج‌شنبه": [

    ],
    "جمعه": [

    ]
  };
  
  function loadSchedule(day) {
    const classList = document.getElementById('class-list');
    classList.innerHTML = ''; 
  
    const classes = scheduleData[day];
    if (classes.length === 0) {
      classList.innerHTML = `<p> واسه امروز کلاسی ثبت نشده(اگر میخوای کلاسی امروز باشه بهمون خبر بده) </p>`;
      return;
    }
  
    // نمایش کلاس‌ها
    classes.forEach((item) => {
      const classItem = document.createElement('div');
      classItem.classList.add('class-item');
      classItem.innerHTML = `<span>${item.time}</span> <span>${item.class}</span> <span>${item.teacher}</span>`;
      classList.appendChild(classItem);
    });
  }
