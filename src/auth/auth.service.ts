import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

// admin init
try {
  admin.initializeApp(functions.config());
} catch (e) {
  console.log(e);
}

const db = admin.firestore();
@Injectable()
export class AuthService {
  async chechUsernamePassword(userName, password) {
    let cdata;

    const action = await db
      .collection('nutzers')
      .where('userName', '==', userName)
      .where('password', '==', password);
    const data = await action.get();
    data.docs.forEach(fr => {
      cdata = { data: fr.data() };
      cdata.data['id'] = fr.id;
    });

    return cdata;
  }

  async login(email, password) {
    const action = await await admin.auth().getUserByEmail(email);

    //const act1 = await (await db.collection('users').doc(action.uid)).get();

    return action;

    /*
    if (email == action.email) {
      const col = await db
        .collection('users')
        .where('_id', '==', action.uid)
        .where('email', '==', action.email)
        .where('password', '==', password);
      const cl = await col.get();

      return cl.docs, act2;
    } else {
      return 'error';
    }*/
  }
}
