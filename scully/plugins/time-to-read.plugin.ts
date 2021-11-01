
import { getPluginConfig, registerPlugin } from '@scullyio/scully';

export const TIME_TO_READ_PLUGIN = 'timeToReadPlugin';

export interface TimeToReadOptions {}

const includeTimeToRead = async (raw: string) => {
  const options: TimeToReadOptions = getPluginConfig(TIME_TO_READ_PLUGIN);

  const timeToRead = calculateTimeToRead(raw);

  // TODO: Add timeToRead to raw (markdown)
  const markdownWithTimeToRead = raw + `; Time to read: ${timeToRead} min`;

  return markdownWithTimeToRead.toUpperCase();
}

const calculateTimeToRead = (raw: string) => {
  const wordCount = raw.split(/\W+/gmi).length;

  const time = wordCount / 200;
  const minutes = Math.ceil(time);
  const seconds = Math.round((time - minutes) * 60);
  const totalMinutes = minutes + (seconds >= 30 ? 1 : 0);

  return totalMinutes;
};

const validator = async () => [];

registerPlugin('fileHandler', 'md', includeTimeToRead, validator);
