import { Session } from "../Interfaces/SessionData";

class LocalStorageService {
  public static GetSessions = (): Array<Session> => {
    let sessionArray = JSON.parse(localStorage.getItem("Session")!);
    return sessionArray;
  };
  public static DeleteSession = (sessionId: string) => {
    let sessionArray = JSON.parse(localStorage.getItem("Session")!);
    let newArray = sessionArray.filter(
      (session: { id: string | undefined }) => session.id !== sessionId
    );
    localStorage.setItem("Session", JSON.stringify(newArray));
    return newArray;
  };
  public static GetSelectSession = (sessionId: string): Session | undefined => {
    const storageArray = JSON.parse(localStorage.getItem("Session")!);
    return storageArray?.find(
      (session: { id: string }) => session.id === sessionId
    );
  };
  public static SetStorageArray = (sessions: Array<Session>) => {
    localStorage.setItem("Session", JSON.stringify(sessions));
  };
}
export default LocalStorageService;
