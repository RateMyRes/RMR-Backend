import express from 'express';
import controller from '../controllers/residences';
const router = express.Router();

router.get('/residences', controller.getResidences);
router.get('/residences/:id', controller.getResidence);

export = router;
