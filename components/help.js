populateDatabase = db => {
  this.updateProgress('Database integrity check');
  db.executeSql('SELECT 1 FROM Version LIMIT 1')
    .then(() => {
      this.updateProgress('Database is ready ... executing query ...');
      db.transaction(this.queryEmployees).then(() => {
        this.updateProgress('Processing completed');
      });
    })
    .catch(error => {
      console.log('Received error: ', error);
      this.updateProgress('Database not yet ready ... populating data');
      db.transaction(this.populateDB).then(() => {
        this.updateProgress('Database populated ... executing query ...');
        db.transaction(this.queryEmployees).then(result => {
          console.log('Transaction is now finished');
          this.updateProgress('Processing completed');
          this.closeDatabase();
        });
      });
    });
};

loadAndQueryDB = () => {
  this.updateProgress('Plugin integrity check ...');
  SQLite.echoTest()
    .then(() => {
      this.updateProgress('Integrity check passed ...');
      this.updateProgress('Opening database ...');
      SQLite.openDatabase(
        database_name,
        database_version,
        database_displayname,
        database_size,
      )
        .then(DB => {
          db = DB;
          this.updateProgress('Database OPEN');
          this.populateDatabase(DB);
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      this.updateProgress('echoTest failed - plugin not functional');
    });
};

queryEmployees = tx => {
  console.log('Executing employee query');
  tx.executeSql(
    'SELECT a.name, b.name as deptName FROM Employees a, Departments b WHERE a.department = b.department_id and a.department=?',
    [3],
  )
    .then(([tx, results]) => {
      this.updateProgress('Query completed');
      var len = results.rows.length;
      for (let i = 0; i < len; i++) {
        let row = results.rows.item(i);
        this.updateProgress(
          `Empl Name: ${row.name}, Dept Name: ${row.deptName}`,
        );
      }
    })
    .catch(error => {
      console.log(error);
    });
};

tx.executeSql(
  'CREATE TABLE IF NOT EXISTS Version( ' +
    'version_id INTEGER PRIMARY KEY NOT NULL); ',
).catch(error => {
  this.errorCB(error);
});

// https://i.ibb.co/q9ywZmT/askelkyykky-eteen.gif
// https://i.ibb.co/cgQwZzZ/askelkyykky-sivulle.gif
// https://i.ibb.co/Yb0bCR1/askelkyykky-taakse.gif
// https://i.ibb.co/GWNmpjr/burpee.gif
// https://i.ibb.co/wWG7cck/dipit.gif
// https://i.ibb.co/Wt0v47k/hartiasilta.gif
// https://i.ibb.co/8xrR51b/ilmanyrkkeily-koukut.gif
// https://i.ibb.co/pPnj6dV/ilmanyrkkeily-suorat.gif
// https://i.ibb.co/dg2HWZV/istumaannousu.gif
// https://i.ibb.co/x1b9Jt9/istumaannousu-kierrolla.gif
// https://i.ibb.co/rQrKZKB/jalannosto-kyljell-n.gif
// https://i.ibb.co/hZBC0vC/jalkojen-ojennus-selinmakuulla.gif
// https://i.ibb.co/zHLM7fV/kasien-nosto.gif
// https://i.ibb.co/PN2zBd1/kyykky.gif
// https://i.ibb.co/mGpMDHK/kyykkyhyppy.gif
// https://i.ibb.co/GC8Q8kN/lankku.gif
// https://i.ibb.co/KWCCHvn/lankku-punnerrusasennossa.gif
// https://i.ibb.co/WKJHx6k/lantionnosto.gif
// https://i.ibb.co/0jLSsQY/lantionnosto-jalka-ojennettuna.gif
// https://i.ibb.co/Mcgz5mC/lapapunnerrus.gif
// https://i.ibb.co/JsQg7m8/linkkuveitsi.gif
// https://i.ibb.co/GtBrzh5/luisteluhyppy.gif
// https://i.ibb.co/9wCL5V6/nyrkkeily-vaisto.gif
// https://i.ibb.co/601rjLm/olkapaan-kosketukset.gif
// https://i.ibb.co/LnGxK6K/pakioilla-hyppely.gif
// https://i.ibb.co/vByVZd0/pakiolle-nousu.gif
// https://i.ibb.co/pQDfNYV/pistoolikyykky.gif
// https://i.ibb.co/rbjsdV4/punnerrus-kapea-ote.gif
// https://i.ibb.co/QCgbc5w/punnerrus-leveaote.gif
// https://i.ibb.co/34W33Jk/punnerrus-olankosketuksella.gif
// https://i.ibb.co/ZB742Sn/punnerrus-seinaa-vasten.gif
// https://i.ibb.co/RNwXpYv/punnerrus-taittoasennossa.gif
// https://i.ibb.co/jHZLRmp/pyoraily-selinmakuulla.gif
// https://i.ibb.co/qx2MnfV/russian-twist.gif
// https://i.ibb.co/NxKSLJK/selkalihasliike.gif
// https://i.ibb.co/vs7BR5t/selk-lihasliike-ristikk-in.gif
// https://i.ibb.co/84HxMz6/sivulankku.gif
// https://i.ibb.co/PFSDVbw/timanttipunnerrus.gif
// https://i.ibb.co/02k15tn/vaaka.gif
// https://i.ibb.co/Xs3HFMc/yhden-jalan-hyppy.gif
