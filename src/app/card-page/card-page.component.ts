import { Component } from '@angular/core';

@Component({
  selector: 'app-card-page',
  templateUrl: './card-page.component.html',
  styleUrls: ['./card-page.component.css']
})
export class CardPageComponent {
  details = [
    { name: "Naruto", mainImage: "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840" },
    { name: "Sauske", mainImage: "https://imgix.ranker.com/list_img_v2/2702/2862702/original/2862702?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355" },
    { name: "Sakura", mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHngo1nkUQnV935vDAYo6pDX9KdiSLIS_rg&usqp=CAU" },
    { name: "Hinata", mainImage: "https://staticg.sportskeeda.com/editor/2022/07/538ef-16584698258625.png?w=840" },
    { name: "Kiba", mainImage: "https://staticg.sportskeeda.com/editor/2022/08/d8b0d-16599524792764.png?w=840" },
    { name: "Shino", mainImage: "https://staticg.sportskeeda.com/editor/2022/09/a71ec-16629758440755.png?w=840" },
    { name: "Neji", mainImage: "https://wallpapers.com/images/hd/blue-wind-neji-hyuga-amvm31kwk3r4rxdq.jpg" },
    { name: "Ten Ten", mainImage: "https://staticg.sportskeeda.com/editor/2023/06/9cd6a-16860230921441-1920.jpg" },
    { name: "Rock Lee", mainImage: "https://staticg.sportskeeda.com/editor/2022/09/4f3fa-16625628628711-1920.jpg" },
    { name: "Shikamaru", mainImage: "https://staticg.sportskeeda.com/editor/2022/02/92ef9-16442055826904-1920.jpg" },
    { name: "Ino", mainImage: "https://wallpaperset.com/w/full/8/5/0/125002.jpg" },
    { name: "Choji", mainImage: "https://qph.cf2.quoracdn.net/main-qimg-5145e707c3a8e0b9952fb96e683f641c" },
    { name: "Kakashi", mainImage: "https://staticg.sportskeeda.com/editor/2022/04/7ebac-16494427459226-1920.jpg" },
    { name: "Might guy", mainImage: "https://rukminim2.flixcart.com/image/850/1000/kzzw5u80/poster/q/i/b/medium-might-guy-poster-poster-print-on-13x19-inches-poster6368-original-imagbvmzz5ysfcmb.jpeg?q=90" },
    { name: "Asuma", mainImage: "https://imgix.ranker.com/list_img_v2/8403/2728403/original/best-asuma-sarutobi-quotes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720" },
    { name: "Kurenai", mainImage: "https://www.looper.com/img/gallery/the-untold-truth-of-kurenai-yuhi-from-naruto/l-intro-1653487493.jpg" },
    { name: "Jiraya", mainImage: "https://screenrant.com/wp-content/uploads/2020/02/Jiraiya-Naruto.jpg" },
    { name: "Tsunade", mainImage: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/Tsunade-Naruto.jpg" },
    { name: "Minato", mainImage: "https://i.pinimg.com/736x/40/c3/a2/40c3a2acc9d4203095df76db8117537a.jpg" },
    { name: "Kushina", mainImage: "https://qph.cf2.quoracdn.net/main-qimg-081fc18953ee2236b6ebc538505a9bdb-pjlq" },
    { name: "Naruto", mainImage: "https://staticg.sportskeeda.com/editor/2022/08/53e15-16596004347246.png?w=840" },
    { name: "Sauske", mainImage: "https://imgix.ranker.com/list_img_v2/2702/2862702/original/2862702?auto=format&q=50&fit=crop&fm=pjpg&dpr=2&crop=faces&h=185.86387434554973&w=355" },
    { name: "Sakura", mainImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkHngo1nkUQnV935vDAYo6pDX9KdiSLIS_rg&usqp=CAU" },
    { name: "Hinata", mainImage: "https://staticg.sportskeeda.com/editor/2022/07/538ef-16584698258625.png?w=840" },
    { name: "Kiba", mainImage: "https://staticg.sportskeeda.com/editor/2022/08/d8b0d-16599524792764.png?w=840" },
    { name: "Shino", mainImage: "https://staticg.sportskeeda.com/editor/2022/09/a71ec-16629758440755.png?w=840" },
    { name: "Neji", mainImage: "https://wallpapers.com/images/hd/blue-wind-neji-hyuga-amvm31kwk3r4rxdq.jpg" },
    { name: "Ten Ten", mainImage: "https://staticg.sportskeeda.com/editor/2023/06/9cd6a-16860230921441-1920.jpg" },
    { name: "Rock Lee", mainImage: "https://staticg.sportskeeda.com/editor/2022/09/4f3fa-16625628628711-1920.jpg" },
    { name: "Shikamaru", mainImage: "https://staticg.sportskeeda.com/editor/2022/02/92ef9-16442055826904-1920.jpg" },
    { name: "Ino", mainImage: "https://wallpaperset.com/w/full/8/5/0/125002.jpg" },
    { name: "Choji", mainImage: "https://qph.cf2.quoracdn.net/main-qimg-5145e707c3a8e0b9952fb96e683f641c" },
    { name: "Kakashi", mainImage: "https://staticg.sportskeeda.com/editor/2022/04/7ebac-16494427459226-1920.jpg" },
    { name: "Might guy", mainImage: "https://rukminim2.flixcart.com/image/850/1000/kzzw5u80/poster/q/i/b/medium-might-guy-poster-poster-print-on-13x19-inches-poster6368-original-imagbvmzz5ysfcmb.jpeg?q=90" },
    { name: "Asuma", mainImage: "https://imgix.ranker.com/list_img_v2/8403/2728403/original/best-asuma-sarutobi-quotes?fit=crop&fm=pjpg&q=80&dpr=2&w=1200&h=720" },
    { name: "Kurenai", mainImage: "https://www.looper.com/img/gallery/the-untold-truth-of-kurenai-yuhi-from-naruto/l-intro-1653487493.jpg" },
    { name: "Jiraya", mainImage: "https://screenrant.com/wp-content/uploads/2020/02/Jiraiya-Naruto.jpg" },
    { name: "Tsunade", mainImage: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/10/Tsunade-Naruto.jpg" },
    { name: "Minato", mainImage: "https://i.pinimg.com/736x/40/c3/a2/40c3a2acc9d4203095df76db8117537a.jpg" },
    { name: "Kushina", mainImage: "https://qph.cf2.quoracdn.net/main-qimg-081fc18953ee2236b6ebc538505a9bdb-pjlq" }
  ]

}
