export default class Team {
  constructor(
    teamName,
    teamPassword,
    teamSummary,
    teamPhoto,
    teamLead,
    teamCode,
  ) {
    this.teamCode = teamCode;
    this.teamPassword = teamPassword;
    this.teamName = teamName;
    this.teamSummary = teamSummary;
    this.teamPhoto = teamPhoto;
    this.teamLead = teamLead;
  }
}
