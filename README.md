# Frontend Technical Test

An InterPro entry is created for each protein family, domain or important site signature that is integrated into InterPro from one or more of its 13 member databases.

This test is focused on InterPro entries of the type `repeat`.

You should use the following endpoints of our API to complete the test.
*  InterPro entries of the type repeat: https://www.ebi.ac.uk/interpro/api/entry/InterPro/?type=repeat
* Detailed information about an Interpro entry: `https://www.ebi.ac.uk/interpro/api/entry/InterPro/[accession]`
  examples:
  * IPR000033: https://www.ebi.ac.uk/interpro/api/entry/InterPro/IPR000033
  * IPR000102: https://www.ebi.ac.uk/interpro/api/entry/InterPro/IPR000102

We would like you to create a React application that dynamically displays the information of the tasks below.

You can bootstrap your application using any bundler you like, but please provide the scripts to install, build, and start a dev environment. (e.g. npm install, npm run build, npm run start).



### Tasks

1. Aggregate the information of the InterPro repeat entries in a chart that shows how many signatures each member database contributes to repeat entries. For example, `IPR000003` has 1 pfam, 1 profile, and 1 smart signatures; `IPR000102` has 1 pfam and 1 prosite. so the aggregated chart for those 2 signatures might look like this:
   ![Screenshot 2024-05-15 at 12 15 01](https://github.com/ProteinsWebTeam/frontend-technical-test/assets/46671268/9e3d750e-5cd8-4f1e-a800-ba0eea43855c)
Your task is to generate a similar chart, using any library or style of your liking that aggregates all the 374 InterPro repeat entries.
2. Create a data table that displays the information of all the repeats following this example:
<img width="651" alt="Screenshot 2024-05-15 at 13 54 20" src="https://github.com/ProteinsWebTeam/frontend-technical-test/assets/46671268/2c13b6d3-2233-4cda-995d-2b9e92dad744">

3. When the user clicks the `+`, expand the row and display the integrated signatures and the most recent literature reference associated with the entry. For example:
<img width="651" alt="Screenshot 2024-05-15 at 13 47 10" src="https://github.com/ProteinsWebTeam/frontend-technical-test/assets/46671268/85710b65-5497-4282-9ba9-85531b9f7c4d">
4. Using GitHub actions, create a CD script that installs your app on GitHub pages.

---

You have until 11 am on 23 May 2024 to share your repo and link to the app running on GitHub pages.
