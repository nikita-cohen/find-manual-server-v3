const express = require('express');
const cors = require('cors');
const app = express();
const manualRouter = require('./router/AddDocumentRouter');
const searchManualRouter = require('./router/SearchRouter');

require('./config/ConfigDB');

app.use(express.json());
app.use(cors());

app.use('/manual/search', searchManualRouter);
app.use('/manual', manualRouter);

app.listen(8099)
