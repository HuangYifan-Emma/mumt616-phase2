import glob
import os
import json
import pandas as pd
from datetime import datetime
import sys
import argparse
from tqdm import tqdm

def dir_path(string):
    if os.path.isdir(string):
        return string
    else:
        raise NotADirectoryError(string)

def dir_file(string):
    if os.path.isdir(string):
        raise IsADirectoryError(string)
    else:
        return string

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--time', '--parse-timestamp', action='store_true', default=True, help='parse the timestamp of filename and add the datetime to the output csv')
    parser.add_argument('--prefix', type=str, default='form_result_', help='set up the prefix of the file name')
    parser.add_argument('--index', '--include-index', action='store_true', default=True, help='generate id for each row of form data')
    parser.add_argument('-i', '--input', type=dir_path, default=os.getcwd(), help='set up the directory for input json files')
    parser.add_argument('-o', '--output', type=dir_file, default='data.csv', help='set up the output filename')
    args = parser.parse_args()
    # print(args)
    json_files = glob.glob(args.input + '/' + args.prefix + '*.json')
    output_df = pd.DataFrame()
    print('Find {0} json files, start processing...'.format(len(json_files)))
    for i in tqdm(range(len(json_files))):
        filename = json_files[i];
        print(filename)
        # for filename in json_files:
        with open(filename, 'r') as f:
            data = json.load(f)
            if args.time:
                submit_timestamp = os.path.basename(filename).replace(args.prefix, '', 1).replace('.json', '')
                submit_time = datetime.fromtimestamp(round(int(submit_timestamp) / 1000))
                data['submit_time'] = submit_time
            output_df = output_df.append(data, ignore_index=True)
    output_filename = args.output
    output_df.to_csv(output_filename, index_label='id', index=args.index)

if __name__ == "__main__":
    main()
