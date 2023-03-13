import {
  MAIN_ROUTE,
  UPDATE_COLUMN_ROUTE,
  JWT,
  UPDATE_COLUMN_ORDER
} from './../../shared/consts/routes.constants';
import { Router } from 'express';
import passport from 'passport';
import ColumnController from '../../controllers/column.controller';

const router: Router = Router();

router.post(
  MAIN_ROUTE,
  passport.authenticate(JWT, { session: false }),
  ColumnController.createColumn
);

router.get(MAIN_ROUTE, passport.authenticate(JWT, { session: false }), ColumnController.getColumns);

router.delete(
  MAIN_ROUTE,
  passport.authenticate(JWT, { session: false }),
  ColumnController.deleteColumn
);

router.put(
  UPDATE_COLUMN_ROUTE,
  passport.authenticate(JWT, { session: false }),
  ColumnController.updateColumn
);

router.patch(
  UPDATE_COLUMN_ORDER,
  passport.authenticate(JWT, { session: false }),
  ColumnController.updateColumnOrder
);

export default router;
