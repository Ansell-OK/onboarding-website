export enum TrackType {
  DEVELOPMENT = 'DEVELOPMENT',
  CONTENT = 'CONTENT',
  MUSIC = 'MUSIC'
}

export interface OnboardingState {
  discordJoined: boolean;
  selectedTrack: TrackType | null;
  submissionsViewed: boolean;
}

export interface StepProps {
  onNext: () => void;
}