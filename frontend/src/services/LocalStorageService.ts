import { Session } from '../interfaces/SessionData';

class LocalStorageService {
  public static GetSessions = (): Array<Session> => {
    let sessionArray = JSON.parse(localStorage.getItem('session')!);
    return sessionArray;
  };
  public static Deletesession = (sessionId: string) => {
    let sessionArray = JSON.parse(localStorage.getItem('session')!);
    let newArray = sessionArray.filter(
      (session: { id: string | undefined }) => session.id !== sessionId,
    );
    localStorage.setItem('session', JSON.stringify(newArray));
    return newArray;
  };
  public static GetSelectsession = (sessionId: string): Session | undefined => {
    const storageArray = JSON.parse(localStorage.getItem('session')!);
    return storageArray?.find((session: { id: string }) => session.id === sessionId);
  };
  public static SetStorageArray = (sessions: Array<Session>) => {
    localStorage.setItem('session', JSON.stringify(sessions));
  };
}
export default LocalStorageService;
