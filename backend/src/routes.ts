import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import orphanagecontrolers from './controlers/orphanagecontrolers';

const routes = Router ();
const upload = multer(uploadConfig);

routes.get('/orphanages', orphanagecontrolers.index);
routes.get('/orphanages/:id', orphanagecontrolers.show);
routes.post('/orphanages', upload.array('images'), orphanagecontrolers.create);
   
export default routes; 