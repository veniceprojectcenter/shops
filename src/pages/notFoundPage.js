import React from "react";
import '../css/404.css';
/**
 * NotFoundPage()
 * Used as backup in router to re-direct user when 404 error is encountered
*/
function NotFoundPage() {
    return(
        <div class="site-body">
            <h1 id="404">404</h1>
            <h2 id="404"> Page not found, please either redirect yourself with a new request or use the navigation menu above.</h2>
        </div>
    );
}
export default NotFoundPage;