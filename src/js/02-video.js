  import Player from '@vimeo/player';
    import throttle from "lodash.throttle";

    const frame = document.querySelector('iframe');
    const playeer = new Player(frame);

    const onPlay = function({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
 
    playeer.on('timeupdate', throttle(onPlay, 1000));
   }
    playeer.setCurrentTime(localStorage.getItem('videoplayer-current-time', 'timeupdate')).catch(function (error) {
            // an error occurred
        });




