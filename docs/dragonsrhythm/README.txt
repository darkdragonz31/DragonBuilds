Dragon's Rhythm beta website update — October 5, 2026

Upload the updated docs folder into the existing DragonBuilds repository and publish through the existing GitHub Pages workflow. No npm install, build step, or new hosting provider is needed.

Updated files:
- docs/index.html (Dragon's Rhythm card and clearly named beta links)
- docs/dragonsrhythm/index.html (beta landing page and social metadata)
- docs/dragonsrhythm/dragonsrhythm.css (responsive signup/benefit layouts)
- docs/dragonsrhythm/privacy.html (updated existing privacy policy)
- docs/dragonsrhythm/README.txt
New files:
- docs/dragonsrhythm/beta.html
- docs/dragonsrhythm/beta.js
- docs/dragonsrhythm/support.html
- docs/dragonsrhythm/support.js

DEDICATED FORM DESTINATIONS
Beta: https://formspree.io/f/xvkzoeqk
Support: https://formspree.io/f/mbgdjnkk
Both endpoints were supplied specifically for Dragon's Rhythm. Neither uses a MyGarage form. Submissions identify Dragon's Rhythm in the app field and subject.
The support page is docs/dragonsrhythm/support.html, with support.js providing submission feedback and retry handling. Navigation and the beta FAQ link to it. The public support email remains the existing DragonBuilds inbox because no new email address was supplied.

BEFORE ANNOUNCING
1. Open https://dragonbuilds.com/dragonsrhythm/beta.html after uploading and submit one real signup with your own email. Submit one support request too, and confirm delivery to their separate forms. Automated local checks use simulated responses; no live test signup was sent.
2. Beta enrollment is manual: add the supplied Google Play email to the correct tester list and send the opt-in/install link once the test is ready. There is no automatic Play enrollment or email invitation service in these files.
3. Compare the policy to the exact release build. Existing claims about local app records, no advertising/analytics SDKs, internal Coach/Insights, photos, exports, and Youth Mode were retained from the supplied policy; the current app source was not included. Health Connect step syncing was added based on the known app feature. Verify all requested Health Connect data types and permissions, all libraries/services, backup behavior, and any new billing before submitting the Play declarations. The signup, support, retention, and deletion wording describes how these requests should be handled operationally.
4. Pricing is described as PLANNED: free plus a one-time $9.99 Full upgrade. No unconfirmed free/full split or beta purchase promise was added. Update the beta FAQ once that decision is final.
5. Existing screenshots are retained and labeled as development screenshots. Replace them with current captures when ready, particularly Today and Insights. Social previews use the existing Today screenshot.

POLICY REFERENCES
https://developer.android.com/health-and-fitness/health-connect/publish
https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax/
https://formspree.io/legal/privacy-policy/

Public pages:
https://dragonbuilds.com/dragonsrhythm/
https://dragonbuilds.com/dragonsrhythm/beta.html
https://dragonbuilds.com/dragonsrhythm/privacy.html

https://dragonbuilds.com/dragonsrhythm/support.html

October 6 layout correction:
- Benefits section retains its three styled cards; all Dragon's Rhythm pages now use a versioned stylesheet URL to avoid stale cached CSS.
- Youth Mode screenshots now use three matching phone frames in a balanced composition with captions, with constrained image heights on desktop and mobile.
Upload the HTML files AND dragonsrhythm.css together.

Founder section update: added images/lisa-and-dragon.png (text removed, transparent background), updated index.html and dragonsrhythm.css, and bumped the stylesheet reference in all four Dragon's Rhythm HTML pages.

Beta copy update: simplified testing expectations and added the free Full-version launch offer for all beta testers who participate and give feedback. Pricing FAQ starts expanded so the offer is visible. Sage artwork is pending; no substitute character or placeholder was added.

Coach artwork update: Sage on beta.html and Lumi on support.html, using original supplied PNGs. Added coach-pages.css, images/sage-signup.png and images/lumi-support.png. Index and privacy unchanged. Beta effort and free Full-version offer remain intact.
