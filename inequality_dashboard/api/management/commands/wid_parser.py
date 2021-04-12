# Parses all files from WID and loads them into the DB
from django.core.management.base import BaseCommand, CommandError
import csv
from api.models import Indicator,Country

class Command(BaseCommand):
    help = 'Load pertinent data from WID (located in WID_DATA folder) into DB'

    def handle(self, *args, **options):
        # TODO open all country files in folder 
        with open('/home/olpi/projects/inequality-dashboard/WID_DATA/WID_data_BE.csv') as csv_file:
            csv_reader = csv.reader(csv_file, delimiter=';')
            line_count = 0
            # empty previous indicators
            # Indicator.objects.all().delete()

            # list of all variables needed for charts
            variables_list = ['sptinc992j']
            percentiles_list = ['p90p100','p0p50','p50p90','p99p100']

            for row in csv_reader:
                if line_count == 0:
                    print(f'Column names are {", ".join(row)}')
                    line_count += 1
                else:
                    if row[1] in variables_list and row[2] in percentiles_list :
                        q = Indicator(
                                year = row[3],
                                country = Country.objects.get(code=row[0]),
                                percentile = row[2],
                                value = row[4],
                                variable = row[1],
                            )
                        q.save()
                        line_count += 1
            self.stdout.write(f'Processed {line_count} lines.')

        self.stdout.write(self.style.SUCCESS('Files loaded !'))



